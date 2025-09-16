#include<stdio.h>
int main(){
    int i =1;
    int n;
    printf("Nhap n:\n");
    scanf("%d",&n);
    do
    {
        printf("%d x %d\n",n,n*i);
        i++;
    } while (i<=10);
    return 0;
    
}