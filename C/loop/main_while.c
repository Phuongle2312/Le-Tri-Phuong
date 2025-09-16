#include <stdio.h>
int main()
{
    int min;
    int max;
    int div;
    while (1)
    {
        printf("Enter min \n");
        scanf("%d", &min);
        printf("Enter max \n");
        scanf("%d", &max);
        printf("Enter divisor \n");
        scanf("%d", &div);

        if (min <= max)
        {
            if (div != 0)
            {
                int i = min;
                while (i <= max)
                {
                    if (i % div == 0)
                    {
                        printf("i = %d\n", i);
                    }
                    i++;
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
}