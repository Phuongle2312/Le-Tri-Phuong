/*3) Năm nhuận & số ngày trong tháng 
Cơ	sở	lý	thuyet:	Năm nhuân:	%400==0	hoăc (%4==0 &&	%100!=0).	
Yêu cau:Nhâp tháng,năm→ so ngày của tháng.	
Prototype gợi	ý :int	days_in_month(int month,int	year);	
Vı́	dụ	I/O:	
Input:	2 2024→ 29*/
#include <stdio.h>
int is_leap_year(int year)
{
    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))
    {
        return 1;
    }
    else
    {
        return 0;
    }
}
int days_in_month(int month, int year)
{
    switch (month)
    {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        return 31;
    case 4:
    case 6:
    case 9:
    case 11:
        return 30;
    case 2:
        if (is_leap_year(year))
        {
            return 29;
        }
        else
        {
            return 28;
        }
    default:
        return -1; // tháng không hợp lệ
    }
}

int main()
{
    int month;
    int year;
    printf("Nhap thang va nam: ");
    scanf("%d %d", &month, &year);

    int days = days_in_month(month, year);
    if (days == -1)
    {
        printf("Thang khong hop le!\n");
    }
    else
    {
        printf("So ngay trong thang %d nam %d la: %d\n", month, year, days);
    }
    return 0;
}