#include <stdio.h>
// Hàm tính lưỹ thừa a^b với b >=0
long long pow_int(int a, int b)
{
    if (b < 0)
        return -1; // Không hỗ trợ số mũ âm

    long long result = 1;
    for (int i = 0; i < b; i++)
    {
        result *= a;
    }
    return result;
}
int main()
{
    int a, b;
    printf("Nhap a,b (voi b >=0): ");
    scanf("%d %d", &a, &b);
    if (b < 0)
    {
        printf("Chi ho tro b >=0\n");
    }
    else
    {
        printf("%d^%d = %lld\n", a, b, pow_int(a, b));
    }
    return 0;
}