import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(): string{
    return 'Amirat *** Abdelkrim'
  }

  getCalcul(): number{ 
    return 5*5
  }

  postTest2(): string{
    return "Welcom to : "
  }

  sayWelcomeToTheUser(name: string){
    return 'Welcome to  :  ' + name;
  }

}
 