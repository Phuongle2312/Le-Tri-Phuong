#include <stdio.h>
#include <math.h>
int is_perfect_square(int n)
{
    if (n < 0) // số âm không thể là số chính phương
    {
        return 0;
    }
    int root = (int)sqrt(n);
    return (root * root == n);
}
int main()
{
    int n;
    printf("Nhap n: ");
    scanf("%d", &n);
    if (is_perfect_square(n))
    {
        printf("%d la so chinh phuong\n", n);
    }
    else
    {
        printf("%d khong phai la so chinh phuong\n", n);
    }
    return 0;
}