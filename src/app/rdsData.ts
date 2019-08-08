export interface RdsData {
    id: number;
    content: string;
    name: string;
    sex: string;
    url: string;
   
   
  }

  
  export class RdsDataEntry{
    rdsData: RdsData;


    constructor(data){
      this.rdsData.id= data.id;
      this.rdsData.content = data.content;
      this.rdsData.name = data.name;
      this.rdsData.sex = data.sex;
      this.rdsData.url = data.url;
    }
  }