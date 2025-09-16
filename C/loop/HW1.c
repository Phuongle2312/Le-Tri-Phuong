#include <stdio.h>
int main()
{
    // bai 1
    //  for (int i = 1; i <= 10; i++)
    //  {
    //      printf("%d\n",i);
    //  }
    //  return 0;

    // bai 2
    //  int i = 0;
    //  printf("In ra cac so chan tu 1 den 100\n");
    //  while (i <= 100)
    //  {
    //      printf("%d\n",i);
    //      i+=2;
    //  }
    //  return 0;

    // bai 3
    //  int i=1;
    //  printf("In ra bang cuu chuong 5\n");
    //  do
    //  {
    //      printf("5 X %d\n",i,5 * i);
    //      i++;
    //  } while (i<=10);
    //  return 0;

    // bai 4
    //  int n;
    //  int i =1;
    //  printf("Nhap n: ");
    //  scanf("%d", &n);
    //  do
    //  {
    //      printf("%d",i);
    //      i++;
    //  } while (i<=n);
    //  return 0;

    // bai 5
    //  int n;
    //  int i=1;
    //  int Sum = 0;
    //  printf("Nhap n: ");
    //  scanf("%d", &n);
    //  if (n<1)
    //  {
    //      printf("n phai lon hon hoac bang 1\n");
    //      return 0;
    //  }
    //  do
    //  {
    //      Sum += i;
    //      i++;
    //  } while (i<=n);
    //  printf("Tong cac so tu 1 den %d = %d\n",n, Sum);
    //  return 0;

    // Bài 6
    //  int n;
    //  int i =1;
    //  long multiply = 1;
    //  printf("Nhap n:");
    //  scanf("%d",&n);
    //  if (n<0)
    //  {
    //      printf("Phep tich khong the la so am!\n");
    //      return 0;
    //  }
    //  do
    //  {
    //      multiply *=i;
    //      i++;
    //  } while (i<=n);
    //  printf("Tich cac so tu 1 den %d =%d\n",n,multiply);
    //  return 0;

    // Bài 7
    //  int i=0;
    //  int n;
    //  printf("Nhap n\n");
    //  scanf("%d",&n);
    //  if (n<=1)
    //  {
    //      printf("Khong co so le nao nho hon %d\n");
    //      return 0;
    //  }
    //  do
    //  {
    //      if (i%2 !=0)
    //      {
    //          printf("%d",i);
    //      }
    //      i++;
    //  } while (i<n);
    //  return 0;

    // Bài 9 Nhập vào n, in ra tổng các số chẵn từ 1 đén n
    // 1. Khai báo biến n và sum nhập vào giá trị
    // 2. Duyệt các số từ 1 đến n.
    // 3. Kiểm tra số đó có là số chẵn hay không?
    // 4. Nếu là số chẵn thì cổng vào tổng.
    // 5/ Kết thúc vòng lặp in ra tổng.

    int n;
    int sum =0;
    printf("Enter n\n");
    scanf("%d", &n);
    for (int i = 0; i <= n; i++)
    {
        if (i % 2 == 0)
        {
            sum = sum + i;
        }
    }
    printf("Summary = %d",sum);
    return 0;
}