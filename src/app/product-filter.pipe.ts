import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './IProduct';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: IProduct[],args: string): unknown {
    return value.filter(item=> item.price > Number(args));   
  }

}
