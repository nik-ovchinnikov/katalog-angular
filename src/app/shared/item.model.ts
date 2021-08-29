import { Storage } from './storage.model'
import { ItemType} from './itemType.model'
import { ItemPicture } from './itemPicture.model'

export class Item {
    constructor(
         
        public name: string = '',
        public description: string = '',
        public itemPicture: ItemPicture[] = [],
        public key: string = '',
        public incomeDate: Date = new Date(),
        public storage: Storage = new Storage(), 
        public itemType: ItemType = new ItemType(),
        public id: number = -1,
        public photos: File[] = [],
        public imageSource: string = '',

        // public imagePicturesURLs = null,
        //размеры
    ) {}

    public imageURL(): string {
        let result
        if(this.itemPicture != undefined) {
            console.log(this.itemPicture[0].path + this.itemPicture[0].name);
            result = this.itemPicture[0].path + this.itemPicture[0].name;
        } else {
            console.log(3434234324);
            result = '#';
        }
        return result;
    }
}