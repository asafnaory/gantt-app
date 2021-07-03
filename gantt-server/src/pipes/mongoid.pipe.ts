import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MongoidPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (/^[0-9a-fA-F]{24}$/.test(value) === false) {
      throw new BadRequestException('id parameter is malformed');
    }
    return value  }
}
