//1) Nhiệt độ: C ↔ F & cảnh báo sốt 
//Cơ	sở	lý	thuyet:	F =	C*9/5	+	32;	sot	khi	C ≥ 37.5.	
//Yê u	cau: Viet các hàm chuyen đoi	và	kiem tra sot;	in	cả nh	báo neu sot.	
//Prototype	gợ i	ý :double	c_to_f(double c);double	f_to_c(double f);int is_fever(double c);	
//	dụ	I/O:	
//:	38.2	→	is_fever=1;	c_to_f=100.76	
#include <stdio.h>
double c_to_f(double c)
{
    return c * 9 / 5 + 32;
}
double f_to_c(double f)
{
    return (f - 32) * 5 / 9;
}
int is_fever(double c)
{
    if (c >= 37.5)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}
int main()
{
    double c;
    printf("Nhap nhiet do (do C): ");
    scanf("%lf", &c);

    double f = c_to_f(c);
    int fever = is_fever(c);

    printf("Nhiet do F = %.2f\n", f);
    printf("is_fever = %d\n", fever);    //printf("Trang thai la :%s\n",is_fever(c)? "bi sot ":"binh thuong");
    if (fever)
    {
        printf("Canh bao: ban dang bi sot!\n");
    }
    return 0;
}
