export class dataEvent {
    constructor(
      public type: string,
      public title: string,
      public description: string,
      public date: string,
      public operation?: string,
      public sum?: number,
      public currency?: string,
      public from?: string
    ) { }
  }
  