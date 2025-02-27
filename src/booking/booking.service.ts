import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingService {
    reserve(): string{
        return 'Booking Reserved';
      }
}
