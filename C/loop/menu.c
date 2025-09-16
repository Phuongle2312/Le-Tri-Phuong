#include<stdio.h>
int main()
{
    int  choice =0;
    while (1)
    { 
        printf("Please enter your choice (1-9) \n");
        scanf("%d",&choice);
        switch (choice)
        {
        case 1:
            printf("You chose option 1\n. Summary 2 numbers \n");
            break;
        case 2: 
            printf("You chose option 2\n. Subtract 2 numbers \n");
            break;
        case 3:
            printf("You chose option 3\n. Multiply 2 numbers \n");
            break;
        case 4:
            printf("You chose option 4\n. Divide 2 numbers \n");
            break;
        case 9:
            printf("You chose option 9\n. Exit");
            return 0;
        default:
            printf("Invalid choice. Please choose again.");
            break;
        }
    }
    
}