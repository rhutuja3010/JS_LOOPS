# a=["n","i","t","i","o"]
# a=input("enter the name :")
# e=a
# b=""
# i=1
# l=[]
# while i<=len(a):
#     l.append(a[-i])
#     i+=1
# if l==a:
#     print("palindrom")
# else:
#     print("not")



# const n=require("readline-sync");
# var name=n.question("enter name: ")
# const store=name;
# var string=""
# for (let i=name.length-1;i>=0;i--) {
#    string=string+name[i]
# }
# if (store===string) {
#    console.log("its palindrome string")
# }
# else {
#    console.log("it's not a palindrome string")
# }


# i=1
# sum=0
# while i<=10:
#     num=int(input("enter the no :"))
#     sum+=num
#     i+=1
# print(sum)




# i=97
# while i<=101:
#     j=97
#     while j<=i:
#         print(chr(j),end=" ")
#         j+=1
#     print()
#     i+=1

# i=100
# while i>=1:
#     if i%7==0:
#         print(i)
#     i-=1

# Write a program to print the first 10 natural numbersin reverse order

# i=10
# while i>=1:
#     print(i)
#     i-=1



# n=int (input("enter the number :"))
# x=0
# y=1
# z=0
# while z<=n:
#     print(z)
#     x=y
#     y=z
#     z=x+y


# num=int(input("enter the no :"))
# rev=0
# while 0<num:
#     rem=num%10
#     rev=rev*10+rem
#     num=num//10
# print(rev)


# n=int(input("enter the no :"))
# p=1
# i=0
# while i<n:
#     r=n%10
#     p=p*10+r
#     i+=1
# print(p)



# n=int(input("enter the no :"))
# sum=0
# i=0
# while i<n:
#     r=n%10
#     sum=sum*n+r
#     n=n//10
#     i+=1
#     print(sum)


# num=int(input("enter the no :"))
# i=0
# sum=1
# while i<num:
#     sum=sum*num%10
#     num=num//10
#     print(sum)
#     i+=1
    

# a=["zero","one","two","three","four","five","six","seven","eight","nine","ten"]
# i=0
# n=int(input("enter the no :"))
# while i<len(a):
#     if i==n:
#         print(a[i])
#     i+=1   
             


# a=[1,0,0,1,1,0,1,1]
# j=0
# i=1
# sum=0
# while i<=len(a):
#     d=a[-i]
#     sum=sum+(2**j)*d
#     j+=1
#     i+=1
# print(sum)


# n=int(input("enter the  1st no :"))
# l=int(input("enter the last no :"))
# i=n
# sum=0
# while i<=l:
#     sum+=i
#     i+=1
# print



# n=int(input("enter the   no :"))
# i=1
# while i<=n:
#     print("1/",i,end="  ")
#     i+=1 



# i=1
# sum=0
# while i<=10:
#     num=int(input("enter the no :"))
#     sum+=num
#     i+=1
# print(sum)
# ave=sum/10
# print(ave)


# i=1
# while i<=5:
#     b=1
#     while b<=5-i:
#         print(" ",end=" ")
#         b+=1
#     j=1
#     while j<=i:
#         print(j,end=" ")
#         j+=1
#     print()
#     i+=1


# i=1
# l=[]
# while i<=10:
#     j=i
#     sum=0
#     while i%1==0:
#         sum+=1
#         j+=1
#     if sum==2:
#         print("it is prime no ")
#     else:
#         print("not prime ")







# k=5
# i=0
# while i<=5:
#     b=1
#     while b<=i:
#         print("",end="")
#         b+=1
#     j=1
#     while j<=k:
#         print("*",end="")
#         j+=1
#     k+=1
#     print()
#     i+=1


# i=0
# a=1
# while i<=4:
#     j=1
#     while j<=i:
#         print(a,end=" ")
#         j+=1
#         a+=1
#     print()
#     i+=1


# a=str(input("enter the number"))
# if (a[1]is '2'):
#     print("yes")
# else:
#     print("no")


# l=[]
# for i in range(0,6):
#     l1=[]
#     for j in range(1,6):
#         a=5*i+j
#         # print(a)
#         l1.append(a)
#     l.append(l1)
# print(l,end=" ")


# i=5
# while 1<=i:
#     j=5
#     while j>=1:
#         print(i,end=" ")
#         j-=1
#     print()
#     i-=1



# numbers=[5,4,67,2,9]
# i=0
# max=0
# secondmax=0
# while i<len(numbers):
#     if max<numbers[i]:
#         max=numbers[i]
#     if numbers[i]<max and numbers[i]>secondmax:
#         secondmax=numbers[i]
#     i+=1
# print(secondmax)


# n=int(input("enter the no :"))
# i=1
# l=[]
# while i<=n:
#     num=int(input("enter the no() :"))
#     l.append(num)
#     i+=1
# print(l)
# max=0
# min=0
# for j in range(len(l)):
#     if max<l[j]:
#         max=l[j]
# print("largest no :",max)
# for j in range(len(l)):
#     if max>l[j]:
#         max=l[j]
# print("smallest  no :",max)



# n1=int(input("enter the 1st no :"))
# n2=int(input("enter the last no :"))
# i=n1
# sum_of_odd=0
# sum_of_even=0
# while i<=n2:
#     if i%2==0:
#         sum_of_even+=i
#     else:
#         sum_of_odd+=i
#     i+=1
# print("sum_of_even :",sum_of_even)
# print("sum_of_odd",sum_of_odd)



guess_number = int(input("enter the guess number: "))
i=1
while i <= 3:
    if guess_number == 5:
        print("congratulation, your guess is correct")
        break
    else: 
        print("sorry, your guss is wrong")   
    again_geuss_number=int(input("enter the geuss number"))
    if again_geuss_number == 5:
        print("congrats, your guess is wrong")   
    
        break
    i+=1






    