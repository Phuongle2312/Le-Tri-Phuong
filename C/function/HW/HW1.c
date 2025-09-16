#include<stdio.h>
int abs_i(int x)
{
    if (x<0)
    {
        return -x;      
    }
    else{
        return x;
    }
}
int main(){
    int n;
    printf("Enter integer n: ");
    scanf("%d, &n");
    
    printf("Gia tri tuyen doi cua %d la: %d\n", n,abs_i(n));
    return 0;
}