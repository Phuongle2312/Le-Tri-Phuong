#include <stdio.h>
int main()
{
    int min;
    int max;
    int div;
    printf("Enter min: \n");
    scanf("%d", &min);
    printf("Enter max: \n");
    scanf("%d", &max);
    printf("Enter divisor:\n");
    scanf("%d", &div);
    // Kiểm tra điều kiện chia hết
    if (min <= max)
    {
        if (div != 0)
        {
            for (int i = min; i <= max; i++)
            {
                if (i % div == 0)
                {
                    printf("i =%d\n", i);
                }
            }
        }
        else
        {
            printf("Divisor is zero, cannot divide.\n");
        }
    }
    else
    {
        printf("Invalid range.Please enter new values.\n");
    }
}