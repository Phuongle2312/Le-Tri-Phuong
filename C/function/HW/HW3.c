#include<stdio.h>
int max2(int a, int b)
{
    if (a > b)
    {
        return a;
    }
    else
    {
        return b;
    }
}
int main(){
    int x,y;
    printf("Nhap 2 so nguyen: ");
    scanf("%d %d",&x, &y);

    printf("So lon hon trong %d va %d la:%d\n",x, y,max2(x,y));
    return 0;
}