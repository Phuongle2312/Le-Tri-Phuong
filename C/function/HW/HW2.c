#include<stdio.h>
int sign_i(int x){
    if (x < 0)
    {
        return -1;
    }
    else if (x ==0)
    {
        return 0;
    }
    else
    {
        return 1;
    }
}
int main(){
    int n;
    printf("Nhap so nguyen n: ");
    scanf("%d", &n);

    printf("Dau cua %d la: %d\n",n,sign_i(n));
    return 0;
}