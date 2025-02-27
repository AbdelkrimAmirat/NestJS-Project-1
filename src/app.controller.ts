import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/hello")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/test")
  getTest(): string {
    return this.appService.getTest();
  }

  @Get("calcul")
  getCalcul(): number{
    return this.appService.getCalcul();
  }

  @Post("/test2")
  postTest2(@Query() query)  {
    return query.age ;
    return this.appService.postTest2();
  } 

  @Post("/test3/:name/:age")
  postTest3(@Param() params)  {
    return params.age ;
    return this.appService.postTest2();
  } 

  @Post("/test3")
  sayWelcomeToTheUser(@Body() body)  {
    return this.appService.sayWelcomeToTheUser(body.name.toUpperCase());
  }

  @Post("/test4")
  postTest4(@Body() body, @Req() req, @Res() res)  {
    res.send(req.body)
    //res.send(this.appService.sayWelcomeToTheUser(body.name))
  }

}
