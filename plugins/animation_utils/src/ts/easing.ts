// The MIT license notice below applies to the function findIntervalBorderIndex
/* The MIT License (MIT)

Copyright (c) 2015 Boris Chumichev

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

/**
 *
 * Utilizes bisection method to search an interval to which
 * point belongs to, then returns an index of left or right
 * border of the interval
 *
 * @param {Number} point
 * @param {Array} intervals
 * @param {Boolean} useRightBorder
 * @returns {Number}
 */
function findIntervalBorderIndex(point: number, intervals: number[], useRightBorder: boolean) {
    //If point is beyond given intervals
    if (point < intervals[0])
        return 0

    if (point > intervals[intervals.length - 1])
        return intervals.length - 1

    //If point is inside interval
    //Start searching on a full range of intervals
    let indexOfNumberToCompare = 0;
    let leftBorderIndex = 0;
    let rightBorderIndex = intervals.length - 1

    //Reduce searching range till it find an interval point belongs to using binary search
    while (rightBorderIndex - leftBorderIndex !== 1) {
        indexOfNumberToCompare = leftBorderIndex + Math.floor((rightBorderIndex - leftBorderIndex) / 2)
        point >= intervals[indexOfNumberToCompare] ?
            leftBorderIndex = indexOfNumberToCompare :
            rightBorderIndex = indexOfNumberToCompare
  }

  return useRightBorder ? rightBorderIndex : leftBorderIndex
}

function stepRange(steps: number, stop = 1) {
    if (steps < 2)
        throw new Error("steps must be > 2, got:" + steps);

    const stepLength = stop / steps;

    return Array.from({length: steps}, (_, i) => i * stepLength);
}

type EasingFunction = (t: number) => number;
type EasingDirection = (easing: EasingFunction) => EasingFunction;

// The MIT license notice below applies to the Easing class
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class Easing {
    /**
     * A stepping function, returns 1 for any positive value of `n`.
     */
    static step0(n: number) {
        return n > 0 ? 1 : 0;
    }
    /**
     * A stepping function, returns 1 if `n` is greater than or equal to 1.
     */
    static step1(n: number) {
        return n >= 1 ? 1 : 0;
    }
    /**
     * A linear function, `f(t) = t`. Position correlates to elapsed time one to
     * one.
     *
     * http://cubic-bezier.com/#0,0,1,1
     */
    static linear(t: number) {
        return t;
    }
    /**
     * A simple inertial interaction, similar to an object slowly accelerating to
     * speed.
     *
     * http://cubic-bezier.com/#.42,0,1,1
     */
    // static ease(t) {
    //     if (!ease) {
    //         ease = Easing.bezier(0.42, 0, 1, 1);
    //     }
    //     return ease(t);
    // }
    /**
     * A quadratic function, `f(t) = t * t`. Position equals the square of elapsed
     * time.
     *
     * http://easings.net/#easeInQuad
     */
    static quad(t: number) {
        return t * t;
    }
    /**
     * A cubic function, `f(t) = t * t * t`. Position equals the cube of elapsed
     * time.
     *
     * http://easings.net/#easeInCubic
     */
    static cubic(t: number) {
        return t * t * t;
    }
    /**
     * A power function. Position is equal to the Nth power of elapsed time.
     *
     * n = 4: http://easings.net/#easeInQuart
     * n = 5: http://easings.net/#easeInQuint
     */
    static poly(n: number) {
        return (t: number) => Math.pow(t, n);
    }
    /**
     * A sinusoidal function.
     *
     * http://easings.net/#easeInSine
     */
    static sin(t: number) {
        return 1 - Math.cos((t * Math.PI) / 2);
    }
    /**
     * A circular function.
     *
     * http://easings.net/#easeInCirc
     */
    static circle(t: number) {
        return 1 - Math.sqrt(1 - t * t);
    }
    /**
     * An exponential function.
     *
     * http://easings.net/#easeInExpo
     */
    static exp(t: number) {
        return Math.pow(2, 10 * (t - 1));
    }
    /**
     * A simple elastic interaction, similar to a spring oscillating back and
     * forth.
     *
     * Default bounciness is 1, which overshoots a little bit once. 0 bounciness
     * doesn't overshoot at all, and bounciness of N > 1 will overshoot about N
     * times.
     *
     * http://easings.net/#easeInElastic
     */
    static elastic(bounciness = 1) {
        const p = bounciness * Math.PI;
        return (t: number) => 1 - Math.pow(Math.cos((t * Math.PI) / 2), 3) * Math.cos(t * p);
    }
    /**
     * Use with `Animated.parallel()` to create a simple effect where the object
     * animates back slightly as the animation starts.
     *
     * Wolfram Plot:
     *
     * - http://tiny.cc/back_default (s = 1.70158, default)
     */
    static back(s = 1.70158) {
        return (t: number) => t * t * ((s + 1) * t - s);
    }
    /**
     * Provides a simple bouncing effect.
     *
     * Props to Waterded#6455 for making the bounce adjustable and GiantLuigi4#6616 for helping clean it up
     * using min instead of ternaries
     * http://easings.net/#easeInBounce
     */
    static bounce(k = 0.5) {
      const q = (x: number) => (121 / 16) * x * x;
      const w = (x: number) => ((121 / 4) * k) * Math.pow(x - (6 / 11), 2) + 1 - k;
      const r = (x: number) => 121 * k * k * Math.pow(x - (9 / 11), 2) + 1 - k * k;
      const t = (x: number) => 484 * k * k * k * Math.pow(x - (10.5 / 11), 2) + 1 - k * k * k;
      return (x: number) => Math.min(q(x), w(x), r(x), t(x));
    }

    /**
     * Provides a cubic bezier curve, equivalent to CSS Transitions'
     * `transition-timing-function`.
     *
     * A useful tool to visualize cubic bezier curves can be found at
     * http://cubic-bezier.com/
     */
    // static bezier(x1, y1, x2, y2) {
    //     const _bezier = require('./bezier');
    //     return _bezier(x1, y1, x2, y2);
    // }
    /**
     * Runs an easing function forwards.
     */
    static in(easing: EasingFunction) {
        return easing;
    }
    /**
     * Runs an easing function backwards.
     */
    static out(easing: EasingFunction) {
        return (t: number) => 1 - easing(1 - t);
    }
    /**
     * Makes any easing function symmetrical. The easing function will run
     * forwards for half of the duration, then backwards for the rest of the
     * duration.
     */
    static inOut(easing: EasingFunction) {
        return (t: number) => {
            if (t < 0.5) {
                return easing(t * 2) / 2;
            }
            return 1 - easing((1 - t) * 2) / 2;
        };
    }

    /**
     * No easing, just snaps to the next keyframe when it's timestamp is reached.
     */
    static singleStep(t: number) {
        return t === 1 ? 1 : 0;
    }

    static catmullRom(n1: number, n2:number, n3:number, n4: number, t: number) {
        return 0.5 * (2.0 * n2 + (n3 - n1) * t +
                (2.0 * n1 - 5.0 * n2 + 4.0 * n3 - n4) * t * t +
                (3.0 * n2 - n1 - 3.0 * n3 + n4) * t * t * t);
    }
}

const quart = Easing.poly(4);
const quint = Easing.poly(5);
const back = (direction: EasingDirection, scalar: number, t: number) => direction(Easing.back(1.70158 * scalar))(t);
const elastic = (direction: EasingDirection, bounciness: number, t: number) => direction(Easing.elastic(bounciness))(t);
const bounce = (direction: EasingDirection, bounciness: number, t: number) => direction(Easing.bounce(bounciness))(t);

export const easingFunctions = {
  linear: Easing.linear,
  step(steps, x) {
    const intervals = stepRange(steps);
    return intervals[findIntervalBorderIndex(x, intervals, false)];
  },
  easeInQuad: Easing.in(Easing.quad),
  easeOutQuad: Easing.out(Easing.quad),
  easeInOutQuad: Easing.inOut(Easing.quad),
  easeInCubic: Easing.in(Easing.cubic),
  easeOutCubic: Easing.out(Easing.cubic),
  easeInOutCubic: Easing.inOut(Easing.cubic),
  easeInQuart: Easing.in(quart),
  easeOutQuart: Easing.out(quart),
  easeInOutQuart: Easing.inOut(quart),
  easeInQuint: Easing.in(quint),
  easeOutQuint: Easing.out(quint),
  easeInOutQuint: Easing.inOut(quint),
  easeInSine: Easing.in(Easing.sin),
  easeOutSine: Easing.out(Easing.sin),
  easeInOutSine: Easing.inOut(Easing.sin),
  easeInExpo: Easing.in(Easing.exp),
  easeOutExpo: Easing.out(Easing.exp),
  easeInOutExpo: Easing.inOut(Easing.exp),
  easeInCirc: Easing.in(Easing.circle),
  easeOutCirc: Easing.out(Easing.circle),
  easeInOutCirc: Easing.inOut(Easing.circle),
  easeInBack: back.bind(null, Easing.in),
  easeOutBack: back.bind(null, Easing.out),
  easeInOutBack: back.bind(null, Easing.inOut),
  easeInElastic: elastic.bind(null, Easing.in),
  easeOutElastic: elastic.bind(null, Easing.out),
  easeInOutElastic: elastic.bind(null, Easing.inOut),
  easeInBounce: bounce.bind(null, Easing.in),
  easeOutBounce: bounce.bind(null, Easing.out),
  easeInOutBounce: bounce.bind(null, Easing.inOut),
  single_step: Easing.singleStep,
  catmullrom: Easing.catmullRom,
};

export type EasingKey = keyof typeof easingFunctions;

// Object with the same keys as easingFunctions and values of the stringified key names
export const EASING_OPTIONS = Object.freeze(Object.fromEntries(
  Object.entries(easingFunctions).map(entry => ([entry[0], entry[0]]))
) as { [Property in EasingKey]: string });
export const EASING_DEFAULT = 'linear';

export interface EasingProperties {
  easing?: EasingKey | null;
  easingArgs?: number[];
}

export type GeckolibKeyframe = _Keyframe & EasingProperties;

export const getEasingArgDefault = (kf: GeckolibKeyframe): number => {
  switch (kf.easing) {
    case EASING_OPTIONS.easeInBack:
    case EASING_OPTIONS.easeOutBack:
    case EASING_OPTIONS.easeInOutBack:
    case EASING_OPTIONS.easeInElastic:
    case EASING_OPTIONS.easeOutElastic:
    case EASING_OPTIONS.easeInOutElastic:
      return 1;
    case EASING_OPTIONS.easeInBounce:
    case EASING_OPTIONS.easeOutBounce:
    case EASING_OPTIONS.easeInOutBounce:
      return 0.5;
    case EASING_OPTIONS.step:
      return 5;
    default:
      return null;
  }
};

export const parseEasingArg = (kf: GeckolibKeyframe, value: string) => {
  switch(kf.easing) {
    case EASING_OPTIONS.easeInBack:
    case EASING_OPTIONS.easeOutBack:
    case EASING_OPTIONS.easeInOutBack:
    case EASING_OPTIONS.easeInElastic:
    case EASING_OPTIONS.easeOutElastic:
    case EASING_OPTIONS.easeInOutElastic:
    case EASING_OPTIONS.easeInBounce:
    case EASING_OPTIONS.easeOutBounce:
    case EASING_OPTIONS.easeInOutBounce:
      return parseFloat(value);
    case EASING_OPTIONS.step:
      return Math.max(parseInt(value, 10), 2);
    default:
      return parseInt(value, 10);
  }
};

export function reverseEasing(easing?: EasingKey): EasingKey {
  if (!easing)
      return easing;

  if (easing.startsWith("easeInOut"))
      return easing;

  if (easing.startsWith("easeIn"))
      return easing.replace("easeIn", "easeOut") as EasingKey;

  if (easing.startsWith("easeOut"))
      return easing.replace("easeOut", "easeIn") as EasingKey;

  return easing;
}

export const isArgsEasing = (easing = "") =>
    easing.includes("Back") ||
    easing.includes("Elastic") ||
    easing.includes("Bounce") ||
    easing === EASING_OPTIONS.step;
