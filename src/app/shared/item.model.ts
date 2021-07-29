import { Storage } from './storage.model'
import { ItemType} from './itemType.model'

export class Item {
    constructor(
        public name: string = '',
        public description: string = '',
        public imagePaths: string[] = [],
        public key: string = '',
        public incomeDate: Date = new Date(),
        public storage: Storage = new Storage(),    
        public type: ItemType = new ItemType(),
        //размеры
    ) {}
}