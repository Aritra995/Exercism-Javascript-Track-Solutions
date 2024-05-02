// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width=80, height=60){
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
}

export function Position(x=0,y=0){
    this.x = x;
    this.y = y;
}

Position.prototype.move = function(newX,newY){
    this.x = newX;
    this.y = newY;
}

export class ProgramWindow{
    constructor(){
        this.screenSize = new Size(800,600);
        this.size = new Size();
        this.position = new Position();
    }

    /**
    * @param {Size} size Size of Window
    */
    resize(size){
        const maxAllowedWidth = this.screenSize.width - this.position.x;
        const maxAllowedHeight = this.screenSize.height - this.position.y;

        const width = Math.max(1,Math.min(size.width,maxAllowedWidth));
        const height = Math.max(1,Math.min(size.height,maxAllowedHeight));
        this.size.resize(width,height);

    }

    /**
    * @param {Position} position Position of Window
    */
    move(position){
        const maxAllowedX = this.screenSize.width - this.size.width;
        const maxAllowedY = this.screenSize.height - this.size.height;
       
        const X = Math.max(0, Math.min(position.x,maxAllowedX));
        const Y = Math.max(0,Math.min(position.y,maxAllowedY));

        this.position.move(X,Y);

    }
}

/**
* @param {ProgramWindow} programWindow 
*/
export function changeWindow(programWindow){
    programWindow.resize(new Size(400,300));
    programWindow.move(new Position(100,150));
    return programWindow;
}