import uniq from 'lodash/uniq';
import { addMonkeypatch, Monkeypatches } from './utils';
import {EASING_OPTIONS, EASING_DEFAULT, getEasingArgDefault, parseEasingArg, GeckolibKeyframe, isArgsEasing} from './easing';

const easingRegExp = /^ease(InOut|In|Out)?([\w]+)$/;

export const loadAnimationUI = () => {
  Blockbench.on('display_animation_frame', displayAnimationFrameCallback);
  Blockbench.on('update_keyframe_selection', updateKeyframeSelectionCallback);

  addMonkeypatch(window, null, "updateKeyframeEasing", updateKeyframeEasing);
  addMonkeypatch(window, null, "updateKeyframeEasingArg", updateKeyframeEasingArg);
  addMonkeypatch(BarItems.keyframe_interpolation, null, 'condition', () => 
    Format.id !== "animated_entity_model" && Monkeypatches.get(BarItems.keyframe_interpolation).condition()
  );

};

export const unloadAnimationUI = () => {
  Blockbench.removeListener('display_animation_frame', displayAnimationFrameCallback);
  Blockbench.removeListener('update_keyframe_selection', updateKeyframeSelectionCallback);
};

export const displayAnimationFrameCallback = (/*...args*/) => {
  // const keyframe = $('#keyframe');
  // console.log('displayAnimationFrameCallback:', args, 'keyframe:', keyframe); // keyframe is null here
};

export function updateKeyframeEasing(value) {
  Undo.initEdit({keyframes: Timeline.selected}) 
  // var axis = $(obj).attr('axis');
  // const value = $(obj).val();
  // console.log('updateKeyframeEasing value:', value, 'obj:', obj); 
  if (value === "-") return;
  Timeline.selected.forEach((kf: GeckolibKeyframe) => {
    kf.easing = value;
    kf.easingArgs = undefined;
  })
  window.updateKeyframeSelection(); // Ensure easingArg display is updated
  // Animator.preview();
  Undo.finishEdit('edit keyframe easing')
}

export function updateKeyframeEasingArg(obj) {
  Undo.initEdit({keyframes: Timeline.selected}) 
  if ($(obj).val() === "-") return;
  // console.log('updateKeyframeEasingArg value:', $(obj).val(), 'obj:', obj); 
  Timeline.selected.forEach((kf: GeckolibKeyframe) => {
    const value = parseEasingArg(kf, ($(obj).val() as string).trim());
    kf.easingArgs = [value];
    // obj.value = value;
  })
  Undo.finishEdit('edit keyframe easing argument')
}

export const updateKeyframeSelectionCallback = (/*...args*/) => {
    $('#keyframe_bar_easing').remove()
    $('#keyframe_bar_easing_type').remove()
    $('#keyframe_bar_easing_arg1').remove()

    const addPrePostButton = document.querySelector<HTMLElement>('#keyframe_type_label > div');
    if (addPrePostButton) addPrePostButton.hidden = Format.id === "animated_entity_model";

    let multi_channel = false; //eslint-disable-line @typescript-eslint/no-unused-vars
    let channel: boolean | string | number = false;
    Timeline.selected.forEach((kf) => {
      if (channel === false) {
        channel = kf.channel
      } else if (channel !== kf.channel) {
        multi_channel = true
      }
    })

    const getMultiSelectValue = (selector, defaultValue, conflictValue) => {
      const selectorFunction = typeof selector === 'function' 
        ? selector
        : x => (x[selector] === undefined ? defaultValue : x[selector]);

      if (Timeline.selected.length > 1) {
        const uniqSelected = uniq(Timeline.selected.map(selectorFunction));
        if (uniqSelected.length === 1) {
          return uniqSelected[0];
        } else {
          return conflictValue;
        }
      } else {
        return selectorFunction(Timeline.selected[0]) || defaultValue;
      }
    };

    const keyframesByChannel = Timeline.keyframes.reduce((acc, kf) => {
      // Dear god I miss lodash
      if (!acc.has(kf.animator)) acc.set(kf.animator, {});
      const animatorChannels = acc.get(kf.animator);
      if (!animatorChannels[kf.channel]) animatorChannels[kf.channel] = [];
      animatorChannels[kf.channel].push(kf);
      animatorChannels[kf.channel].sort((a, b) => {
        if (a.time < b.time) return -1;
        if (a.time > b.time) return 1;
        return 0;
      });
      return acc;
    }, new Map());

    const isFirstInChannel = (kf: _Keyframe) => keyframesByChannel.get(kf.animator)[kf.channel].indexOf(kf) < 1;

    if (Timeline.selected.length && Format.id === "animated_entity_model") {
      if (Timeline.selected.every(kf => kf.animator instanceof BoneAnimator && !isFirstInChannel(kf))) {
        const displayedEasing = getMultiSelectValue('easing', EASING_DEFAULT, 'null');

        const convertEasingTypeToId = (easing, easingType, inputEasingOrType) => {
          const easingTypeToTypeId = type => {
            let finalEasingType = "In";

            if (type === "out") {
              finalEasingType = "Out";
            } else if (type === "inout") {
              finalEasingType = "InOut";
            }

            return finalEasingType;
          };

          let finalEasing = 'ease';

          if (inputEasingOrType === "in" || inputEasingOrType === "out" || inputEasingOrType === "inout") {
              const finalEasingType = easingTypeToTypeId(inputEasingOrType)

              finalEasing += finalEasingType + easing.substring(0, 1).toUpperCase() + easing.substring(1);
            } else if (inputEasingOrType === "linear" || inputEasingOrType == "step" || inputEasingOrType == "single_step" || inputEasingOrType == "catmullrom") {
              finalEasing = inputEasingOrType;
            } else {
              const finalEasingType = easingTypeToTypeId(easingType);

              finalEasing += finalEasingType + inputEasingOrType.substring(0, 1).toUpperCase() + inputEasingOrType.substring(1);
            }

            return finalEasing;
        };

        const addEasingTypeIcons = (bar, easingType, title) => {
          const div = document.createElement("div");
          div.innerHTML = getIcon(easingType);
          div.id = "kf_easing_type_" + easingType;
          div.setAttribute("style", "stroke:var(--color-text);margin:0px;padding:3px;width:30px;height:30px");
          div.setAttribute("title", title);
          div.onclick = () => {
            const selectedEasing = $(".selected_kf_easing");
            const selectedEasingType = $(".selected_kf_easing_type");

            const keySelectedEasing = selectedEasing.attr("id").substring(15);
            const keySelectedEasingType = selectedEasingType.length <= 0 ? "in" : selectedEasingType.attr("id").substring(15);

            const currentEasing = convertEasingTypeToId(keySelectedEasing, keySelectedEasingType, keySelectedEasing);
            const finalEasing = convertEasingTypeToId(keySelectedEasing, keySelectedEasingType, easingType);

            if (finalEasing != currentEasing) {
            //   console.log("Changed from " + currentEasing + " to " + finalEasing);
              updateKeyframeEasing(finalEasing);
            }
          };
          bar.appendChild(div);
        };

        const keyframe = document.getElementById('panel_keyframe');
        let easingBar: HTMLElement = document.createElement('div');
        keyframe.appendChild(easingBar);
        easingBar.outerHTML = `<div class="bar flex" style="flex-wrap: wrap" id="keyframe_bar_easing">
          <label class="tl" style="font-weight: bolder; min-width: 47px;">Easing</label>
        </div>`;
        easingBar = document.getElementById('keyframe_bar_easing');

        addEasingTypeIcons(easingBar, "linear", "Switch to Linear easing");
        addEasingTypeIcons(easingBar, "step", "Switch to Step easing");
        addEasingTypeIcons(easingBar, "sine", "Switch to Sine easing");
        addEasingTypeIcons(easingBar, "quad", "Switch to Quadratic easing");
        addEasingTypeIcons(easingBar, "cubic", "Switch to Cubic easing");
        addEasingTypeIcons(easingBar, "quart", "Switch to Quartic easing");
        addEasingTypeIcons(easingBar, "quint", "Switch to Quntic easing");
        addEasingTypeIcons(easingBar, "expo", "Switch to Exponential easing");
        addEasingTypeIcons(easingBar, "circ", "Switch to Cicle easing");
        addEasingTypeIcons(easingBar, "back", "Switch to Back easing");
        addEasingTypeIcons(easingBar, "elastic", "Switch to Elastic easing");
        addEasingTypeIcons(easingBar, "bounce", "Switch to Bounce easing");
        addEasingTypeIcons(easingBar, "catmullrom", "Switch to Catmull-Rom easing");
        addEasingTypeIcons(easingBar, "single_step", "Switch to no easing");

        const keyEasing = getEasingInterpolation(displayedEasing);
        const keyEasingElement = document.getElementById("kf_easing_type_" + keyEasing);

        keyEasingElement.style.stroke = "var(--color-accent)";
        keyEasingElement.classList.add('selected_kf_easing');

        if (!(keyEasing === "linear" || keyEasing == "step" || keyEasing == "single_step" || keyEasing == "catmullrom")) {
          let easingTypeBar: HTMLElement = document.createElement('div');
          keyframe.appendChild(easingTypeBar);
          easingTypeBar.outerHTML = `<div class="bar flex" id="keyframe_bar_easing_type">
            <label class="tl" style="font-weight: bolder; min-width: 47px;">Type</label>
          </div>`;
          easingTypeBar = document.getElementById('keyframe_bar_easing_type');

          addEasingTypeIcons(easingTypeBar, "in", "Switch to In easing type");
          addEasingTypeIcons(easingTypeBar, "out", "Switch to Out easing type");
          addEasingTypeIcons(easingTypeBar, "inout", "Switch to In/Out easing type");

          const keyEasingType = getEasingType(displayedEasing);
          const keyEasingTypeElement = document.getElementById("kf_easing_type_" + keyEasingType);

          keyEasingTypeElement.style.stroke = "var(--color-accent)";
          keyEasingTypeElement.classList.add('selected_kf_easing_type');
        }

        const getEasingArgLabel = (kf: GeckolibKeyframe) => {
          switch(kf.easing) {
            case EASING_OPTIONS.easeInBack:
            case EASING_OPTIONS.easeOutBack:
            case EASING_OPTIONS.easeInOutBack:
              return 'Overshoot';
            case EASING_OPTIONS.easeInElastic:
            case EASING_OPTIONS.easeOutElastic:
            case EASING_OPTIONS.easeInOutElastic:
            case EASING_OPTIONS.easeInBounce:
            case EASING_OPTIONS.easeOutBounce:
            case EASING_OPTIONS.easeInOutBounce:
              return 'Bounciness';
            case EASING_OPTIONS.step:
              return 'Steps';
            default:
              return 'N/A';
          }
        };
        const easingArgLabel = getMultiSelectValue(getEasingArgLabel, null, null);
        if (Timeline.selected.every((kf: GeckolibKeyframe) => isArgsEasing(kf.easing)) && easingArgLabel !== null) {
          const argDefault = getMultiSelectValue(getEasingArgDefault, null, null);
          const [displayedValue] = getMultiSelectValue('easingArgs', [argDefault], [argDefault]);
          let scaleBar: HTMLElement = document.createElement('div');
          keyframe.appendChild(scaleBar);
          scaleBar.outerHTML = `<div class="bar flex" id="keyframe_bar_easing_arg1">
            <label class="tl" style="font-weight: bolder; min-width: 90px;">${easingArgLabel}</label>
            <input type="number" id="keyframe_easing_scale" class="dark_bordered code keyframe_input tab_target" value="${displayedValue}" oninput="updateKeyframeEasingArg(this)" style="flex: 1; margin-right: 9px;">
          </div>`;
          scaleBar = document.getElementById('keyframe_bar_easing_arg1');
        }

        // console.log('easingBar:', easingBar, 'keyframe:', keyframe);
    }
  }
};

const getEasingInterpolation = (name: string) => {
  const matches = name.match(easingRegExp);

  if (matches) {
    return matches[2].toLowerCase();
  }

  return name;
};

const getEasingType = (name: string) => {
  const matches = name.match(easingRegExp);

  if (matches) {
    return matches[1].toLowerCase();
  }

  return "in";
};

const getIcon = (name: string) => {
  switch(name) {
    case "back":
      return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,295.94165 c 3.17500003,0 4.23333333,2.91041 5.29166663,-4.7625" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
    case "bounce":
      return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,296.47081 c 0.26458333,-0.26458 0.52916673,-0.26458 0.79375003,0 0.5291666,-0.52916 0.5291666,-0.52916 1.0583333,0 0.79375,-2.11666 1.5875,-2.11666 2.38125,0 0.2645833,-4.23333 1.0583333,-5.29165 1.0583333,-5.29165" style="fill:none;stroke-width:0.52899998;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
    case "circ":
      return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="M 0.52916667,296.47081 C 5.8208333,295.67706 5.8208333,293.82498 5.8208333,291.17915" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
    case "cubic":
      return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="M 0.52916667,296.47081 C 3.175,296.47081 4.7625,293.82498 5.8208333,291.17915" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
    case "elastic":
      return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,295.67706 c 0.79375003,0 0.79375003,-0.26458 1.32291663,-0.26458 0.5291667,0 0.79375,0.52917 1.3229167,0.52917 0.5291667,0 1.0094474,-1.83865 1.3229167,-0.79375 0.79375,2.64583 1.3229166,1.32292 1.3229166,-3.96874" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
    case "expo":
    case "in":
      return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,296.47081 c 4.23333333,0 5.29166663,-1.05833 5.29166663,-5.29166" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
    case "inout":
      return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,296.47081 c 5.55625003,0 -0.26458334,-5.29166 5.29166663,-5.29166" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
    case "out":
      return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,296.47081 c 0,-4.23333 1.05833333,-5.29166 5.29166663,-5.29166" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
    case "quad":
      return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="M 0.52916667,296.47081 C 3.175,296.47081 4.7625,293.03123 5.8208333,291.17915" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
    case "quart":
      return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,296.47081 c 3.17500003,0 4.23333333,-2.64583 5.29166663,-5.29166" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
    case "quint":
      return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,296.47081 c 3.43958333,0 4.23333333,-1.85208 5.29166663,-5.29166" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
    case "sine":
      return '<svg width="24" height="24" viewBox="0 0 6.3499999 6.3500002"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,296.47081 c 1.32291663,0 4.23333333,-3.43958 5.29166663,-5.29166" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
    case "step":
      return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,296.47081 0,-1.32291 H 1.8520833 v -1.32292 H 3.175 v -1.32292 h 1.3229167 v -1.32291 l 1.3229166,1e-5" style="fill:none;stroke-width:0.52899998;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
    case "single_step":
      return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="M 0.5292 296.4708 L 5.8208 296.4708" style="fill:none;stroke-width:0.52916667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
    case "catmullrom":
      return '<svg width="24" height="14.089" viewBox="0 -2.5 18 10.567"><path d="M16.206 1.051c-0.129 0.074 -0.147 0.362 -0.037 0.473 0.043 0.043 0.129 0.074 0.203 0.074s0.16 -0.031 0.203 -0.074c0.117 -0.117 0.092 -0.405 -0.043 -0.479 -0.147 -0.074 -0.19 -0.074 -0.326 0.006m-0.639 0.7c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.43 0.491c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.369 0.553c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.491 0.491c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.43 0.491c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049M6.07 3.999c-0.16 0.086 -0.141 0.399 0.018 0.485 0.178 0.098 0.424 0.025 0.424 -0.123 0 -0.061 0.018 -0.129 0.049 -0.141 0.123 -0.074 1.032 0.203 2.132 0.639 0.749 0.301 1.456 0.541 1.812 0.614 0.319 0.068 0.584 0.129 0.584 0.135s0.031 0.068 0.068 0.135c0.141 0.258 0.516 0.129 0.516 -0.178 0 -0.27 -0.289 -0.375 -0.498 -0.184 -0.104 0.092 -0.166 0.086 -0.805 -0.086 -0.381 -0.104 -1.118 -0.35 -1.64 -0.559 -1.032 -0.405 -1.72 -0.62 -2.015 -0.62 -0.104 0 -0.221 -0.043 -0.264 -0.092 -0.086 -0.104 -0.227 -0.117 -0.381 -0.025m7.286 0.27c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-7.741 0.061c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.676 0.307c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m7.925 0.061c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-8.355 0.307c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m7.802 0.123c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.553 0.246c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-7.802 0.123c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.491 0.43c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.491 0.553c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.491 0.43c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049M1.72 7.501c-0.117 0.209 0.012 0.424 0.24 0.424 0.209 0 0.326 -0.154 0.295 -0.381 -0.018 -0.111 -0.068 -0.147 -0.246 -0.16 -0.172 -0.012 -0.233 0.006 -0.289 0.117"/></svg>'
    default: // linear
      return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="M 0.52916667,296.47081 5.8208333,291.17915" style="fill:none;stroke-width:0.52916667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
  }
};