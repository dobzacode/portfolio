'use client';

import { type Variants } from 'framer-motion';

export const delayFadeInVariant: Variants = {
  initial: { opacity: 0 },
  animate: (custom: number) => ({
    opacity: 1,
    transition: { duration: 0.4, delay: 0.05 * custom }
  }),
  enter: { opacity: 0, transition: { duration: 0.5 } }
};

export const ComingFromTopVariant: Variants = {
  initial: {
    opacity: 0,
    y: -100
  },
  animate: {
    opacity: 1,
    y: 0
  },
  enter: {
    opacity: 0,
    y: 100
  }
};

export const ComingFromBottomVariant: Variants = {
  initial: {
    opacity: 0,
    y: '100%'
  },
  animate: {
    opacity: 1,
    y: 0
  },
  enter: {
    opacity: 0,
    y: '-100%'
  }
};

export const ComingFromLeftVariant: Variants = {
  initial: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.5
    }
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
  enter: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.5
    }
  }
};

export const ComingFromLeftVariantWithFadeExit: Variants = {
  initial: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.5
    }
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
  enter: {
    opacity: 0,

    transition: {
      duration: 0.3
    }
  }
};

export const ComingFromRightVariantWithFadeExit: Variants = {
  initial: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.5
    }
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
  enter: {
    opacity: 0,

    transition: {
      duration: 0.3
    }
  }
};

export const FullTranslateFromLeft: Variants = {
  initial: {
    opacity: 0,
    x: -100
  },
  animate: {
    opacity: 1,
    x: 0
  },
  enter: {
    opacity: 0,
    x: 100
  }
};

export const TextSliderVariant: Variants = {
  initial: {
    opacity: 0,
    x: -100
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring'
    }
  },
  enter: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.2
    }
  }
};

export const ComingFromRightVariant: Variants = {
  initial: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.5
    }
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
  enter: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.5
    }
  }
};

export const FromTopStaggerVariant: Variants = {
  initial: {
    opacity: 0,
    y: 4
  },
  animate: () => ({
    opacity: 1,
    y: 0
  }),
  enter: {
    opacity: 0,
    y: -100
  }
};

export const FadeInVariant: Variants = {
  initial: {
    opacity: 0,
    y: 0
  },
  animate: () => ({
    opacity: 1,
    y: 0
  }),
  enter: {
    opacity: 0,
    y: 0
  }
};
