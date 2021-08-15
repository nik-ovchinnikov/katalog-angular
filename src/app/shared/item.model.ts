import { Storage } from './storage.model'
import { ItemType} from './itemType.model'

export class Item {
    constructor(
         
        public name: string = '',
        public description: string = '',
        public imagePaths: string[] = [],
        public key: string = '',
        public incomeDate: Date = new Date(),
        public storageName: string = '',    
        public typeName: string = '',
        public id: number = 0,
        //размеры
    ) {}
}