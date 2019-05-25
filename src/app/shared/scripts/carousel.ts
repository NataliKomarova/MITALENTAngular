
export function newPositionCalc(currentPhoto, prevPhoto, photoNum, photoWidth, carouselBlock, screenPosition, photosMassiveLength) {
    if (currentPhoto < prevPhoto) {
        // left shift
        for (let i = 0; i < (prevPhoto - currentPhoto); i++) {
            screenPosition = Math.min(screenPosition + photoWidth * photoNum, 0);
        }
        carouselBlock.style.marginLeft = screenPosition + 'px';
    }
    else if (currentPhoto > prevPhoto) {
        // right shift
        for (let i = 0; i < (currentPhoto - prevPhoto); i++) {
            screenPosition = Math.max(screenPosition - photoWidth * photoNum, -photoWidth * photosMassiveLength - photoNum);
        }
        carouselBlock.style.marginLeft = screenPosition + 'px';
    };

    return screenPosition;
}

export function carouselMouseDown(event: any): number {
    if (event.type === "touchstart") {
        return event.changedTouches[0].pageX;
    }
    else {
        return event.pageX;
    }
}

export function carouselMouseUp(event: any, startMouseXCoordinate: number, prevPhoto: number, photoAmount: number, callBack) {
    let endMouseXCoordinate: number;
    if (event.type === "touchend") {
        endMouseXCoordinate = event.changedTouches[0].pageX;
    }
    else {
        endMouseXCoordinate = event.pageX;
    }
    if (endMouseXCoordinate < startMouseXCoordinate) {
        if (prevPhoto >= 0 && prevPhoto < photoAmount - 1) {
            callBack(prevPhoto + 1);
        }
    }
    if (endMouseXCoordinate > startMouseXCoordinate) {
        if (prevPhoto > 0 && prevPhoto <= photoAmount - 1) {
            callBack(prevPhoto - 1);
        }
    }
}