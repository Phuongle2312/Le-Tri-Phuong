#include<stdio.h>
int main()
{
    int *ptr_var;
    int var;
    var = 10;
    printf("Gia tri cua bien var = %d\n",var);
    printf("Dia chi cua bien var = %p\n",&var);
    ptr_var = &var;
    printf("Gia tri cua con tro ptr_var = %p\n",ptr_var);
    printf("Dia chi cua con tro = %p\n",&ptr_var);

    printf("Gia tri tham chieu cua con tro: %d\n",*ptr_var);

    var = 20;
    printf("Gia tri tham chieu cua con tro sau khi thay doi: %d\n",*ptr_var);

    *ptr_var = 30;
    printf("Gia tri cua bien var: %d\n",var);


}