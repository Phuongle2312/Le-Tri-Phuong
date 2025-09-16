#include<stdio.h>
int main()
{
    float *ptr_var;
    float var;
    var = 9.6;
    printf("Gia tri cua bien var = %f\n",var);
    printf("Dia chi cua bien var = %p\n",&var);
    ptr_var = &var;
    printf("Gia tri cua con tro ptr_var = %p\n",ptr_var);
    printf("Dia chi cua con tro = %p\n",&ptr_var);

}