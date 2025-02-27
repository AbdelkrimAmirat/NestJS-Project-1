import { Controller, Post, Get } from '@nestjs/common';
import { BookingService } from './booking.service';
import { get } from 'https';

@Controller('booking')
export class BookingController {

    constructor(private bookingService: BookingService){}

    @Get('/reserve')
    reserve(){
        return this.bookingService.reserve();
    }

}
