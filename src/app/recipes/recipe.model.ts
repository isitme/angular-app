export class Recipe{
    public name: string;
    public discription: string;
    public imagePath: string;
    constructor(name:string, desc: string, imgPath: string){
        this.name = name;
        this.discription = desc;
        this.imagePath = imgPath;
    }
}