// Viết chương trình hiển thị ra mảng số nguyên
#include <stdio.h>
void showArray()
{
    int array[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0};
    for (int i = 0; i < 10; i++)
    {
        printf("Vi tri array [%d] gia tri la: %d \n", i, array[i]);
    }
}
void inputArray()
{
    int array[10];
    for (int i = 0; i < 10; i++)
    {
        scanf("%d", &array[i]);
        printf("Phan tu thu {%d} = %d \n", i, array[i]);
    }
    for (int i = 0; i < 10; i++)
    {
        printf("Gia tri cua array [%d] la %d \n", i, array[i]);
    }
}
void inputAdv()
{
    int n;
    printf("Nhap so phan tu cua mang: \n");
    scanf("%d", &n);
    int array[n];
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &array[i]);
        printf("Phan tu thu {%d} = %d \n", i, array[i]);
    }
    for (int i = 0; i < n; i++)
    {
        printf("Gia tri cua array [%d] la %d \n", i, array[i]);
    }
}
void charArray()
{
    printf("Nhap vao mang ky tu \n");
    char name[10];
    for (int i = 0; i < 10; i++)
    {
        scanf(" %c", &name[i]);
    }
    for (int i = 0; i < 10; i++)
    {
        printf("%c", name[i]);
    }
}
void nameArray()
{
    char name[13] = {'L','e',' ','T','r','i',' ','P','h','u','o','n','g'};
    for (int i = 0; i <= 13; i++)
    {
     printf(" %c",name[i]);   
    }
    
}
void numberArray()
{
    int ch,i = 0;
    char str[12];
    printf("The numbers: \n");
    do
    {
        ch = getchar();
        str[i] = ch;
    } while (ch !='\n');
    printf("+840986651866 %s", str);
}
int main()
{
    while (1)
    {
        printf("\n1.Goi ham showArray \n2.Goi ham inputArray \n3.Goi ham inputAdv \n4.Goi ham charArray\n5.Goi ham nameArray\n6.Goi ham numberArray\n");
        int choice;
        printf("Nhap vao lua chon cua ban.\n");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            showArray();
            break;
        case 2:
            inputArray();
            break;
        case 3:
            inputAdv();
            break;
        case 4:
            charArray();
            break;
        case 5:
            nameArray();
            break;
        case 6:
            numberArray();
            break;

        default:
            showArray();
            break;
        }
    }

    return 0;
}