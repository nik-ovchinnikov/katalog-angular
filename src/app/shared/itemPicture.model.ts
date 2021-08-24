export class ItemPicture {
  constructor(
    public name: string = "",
    public previousName: string = "",
    public toDelete: boolean = false,
    public itemId: string = "",
    public path: string = "s",
    public id: number = 0,
    public trustedURL = null,
  ){
  }

  
  private photo: File = null;
 
}