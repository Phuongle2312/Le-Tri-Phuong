// Năm nhuận:Kiểm tra 1 năm có nhuận hay không
#include <stdio.h>
int is_leap_year(int y)
{
    if ((y % 400 == 0) || (y % 4 == 0 && y % 100 != 0))
    {
        return 1; // Năm nhuận
    }
    else
    {
        return 0; // Năm không nhuận
    }
}
int main()
{
    int year;
    printf("Nhap so nam: ");
    scanf("%d", &year);

    if (is_leap_year(year))
    {
        printf("%d la nam nhuan\n", year);
    }
    else
    {
        printf("%d la nam khong nhuan\n", year);
    }
    return 0;
}
