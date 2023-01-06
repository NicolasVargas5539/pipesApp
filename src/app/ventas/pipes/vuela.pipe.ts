import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  HVuela : string = '';

  transform(vuela: boolean ): string {
    // if (vuela == true){
    //   return this.HVuela = 'Vuela';
    // }else{
    //   return this.HVuela = 'No vuela';
    // }
    return ( vuela == true ) ? this.HVuela = 'vuela' : this.HVuela = 'no vuela'
  }

}
