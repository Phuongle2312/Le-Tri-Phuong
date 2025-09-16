#include<stdio.h>
long long sum_to_n(int n)
{
    if (n<=0)
    {
        return 0;
    }
    return(long long)n* (n +1)/2;
}
int main()
{
    int n;
    printf("Nhap vao so n:");
    scanf("%d",&n);

    printf("Tong tu 1 den %d la %lld\n",n,sum_to_n(n));
    return 0;
}