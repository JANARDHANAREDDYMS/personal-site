export const fadeInLeftVariant = {
    hidden: {
        x: -25,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,

        transition:{
            type: 'tween',
            duration: '1',
        }
    }
}

export const fadeInRightVariant = {
    hidden: {
        x: 25,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,

        transition:{
            type: 'tween',
            duration: '1',
        }
    }
}

export const fadeOutLeftVariant = {
    hidden: {
        x: 150,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,

        transition:{
            type: 'tween',
            duration: '1',
        }
    }
}

export const fadeOutLeft1Variant = {
    hidden: {
        x: 25,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,

        transition:{
            type: 'tween',
            duration: '1',
        }
    }
}


export const fadeOutRightVariant = {
    hidden: {
        x: -150,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,

        transition:{
            type: 'tween',
            duration: '1',
        }
    }
}



export const fadeInTopVariant = {
    hidden: {
        y: -20,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 0.9,

        transition:{
            type: 'tween',
            duration: '1',
        }
    }
}


export const fadeInNoVariant = {
    hidden: {
       
        opacity: 0.4,
    },
    visible: {
        
        opacity: 1,

        transition:{
            type: 'tween',
            duration: '1',
        }
    }
}

export const fadeInBottomVariant = {
    hidden: {
        y: 40,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 0.9,

        transition:{
            type: 'tween',
            duration: '1',
        }
    }
}

export const slideInLeft = {
    hidden: {
        x: '-100vh',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        
        transition: {
            type: 'tween',
            duration: 0.5,    
        }
    },

    exit: {
        opacity: 0,
        x: '-100vh',
        transition:
        {
            type: 'tween',
            duration: 0.5,
        }
    }

}