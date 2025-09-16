// Tính tiền điện bậc thang
// Yc: tính tiền điện theo 3 bậc;làm tròn 2 chữ số sau dấu phẩy.
// prototype gợi ý: double power_bill(int kwh);
// VD I/O:
// Input: 120->50*k1+50*k2+20*k3
#include <stdio.h>
double power_bill(int kwh)
{
    double k1 = 1.984;
    double k2 = 2.050;
    double k3 = 2.380;

    double total = 0;

    if (kwh <= 50)
    {
        total = kwh * k1;
    }
    else if (kwh <= 100)
    {
        total = 50 * k1 + (kwh - 50) * k2;
    }
    else
    {
        total = 50 * k1 + 50 * k2 + (kwh - 100) * k3;
    }
    return total;
}
int main()
{
    int kwh;
    printf("Nhap so kwh tieu thu: ");
    scanf("%d", &kwh);

    double bill = power_bill(kwh);
    printf("Tien dien= %.2f VND\n", bill);
    return 0;
}
