# a=["n","i","t","i","o"]
# a=input("enter the name :")
# e=a
# b=""
# i=1
# l=[]
# while i<=len(a):
#     l.append(a[-i])
#     i+=1  # a={"a":1,"b":2,"c":3}                                            /
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



# guess_number = int(input("enter the guess number: "))
# i=1
# while i <= 3:
#     if guess_number == 5:
#         print("congratulation, your guess is correct")
#         break
#     else: 
#         print("sorry, your guss is wrong")   
#     again_geuss_number=int(input("enter the geuss number"))
#     if again_geuss_number == 5:
#         print("congrats, your guess is wrong")   
    
#         break
#     i+=1






# a=6
# b=8
# print(a%b)



# a=[[0,1,2],[2,3,4],[3,4,5,6],[7,8,9,10,11],[12,13,14]]
# i=0
# l=[]
# while i<len(a):
#     j=0
#     while j<len(a[i]):
#         print(a[i][j])
#         j+=1
#     i+=1


# i=1
# while i<=5:
#     j=1
#     while j<=i:
#         print(j,end="")
#         j+=1
#     print()
#     i+=1

# i=1
# while i<=19:
#     j=i
#     while j>=1:
#         print(j,end=" ")
#         j-=2
#     print()
#     i+=3
    # j=1
    # while j<=i:
    #     print(j,end="")
    #     j-=3
    # print()
    # i+=2

# print(3 and True)
# print(not(3 or 4 or 1 and 0 or 3<=5))

# a="rhutu"
# print(int(a))

# a="2+5j"
# print(complex(a))

# a=(1,3,5,6,1,3,2,2)
# for i in a:
#     print(i,end=" ")


# a=29
# b=3
# c=2022
# print(a,"/",b,"/",c)



# r=open("file1.txt","w")
# r.write("HIIIII \n")
# r.write("How Are You\n")
# r.close()

# f=open("file1.txt","r")
# read_file=f.read()
# # print(read_file)
# f.close()

# b=open("file1.txt","r")
# c=b.readlines()
# # print(c)
# b.close()




# a=open("file1.txt","a")
# a.write("Rhutuja Patil")




# import os
# # # os.remove("file1.txt")

# # os.rename("file1.txt","new_file.txt")

# os.copy("file1.txt","copy_file.txt")


# a=("1","a",3,3+2j,2.4)
# # print(a)
# for i in a:
#     print(i)


# import json
# a={"a":1,"b":2,"c":3}
# print(json.dumps(a))


# with open("dump_file.json","w") as f:
#     json.dump(a,f,indent=4)

# with open("dump_file.json","r") as f:
#     b=json.load(f)
#     print(b)

# a='{"a":1,"b":2,"c":3}'
# a="{'a':1,'b':2,'c':3}"
# print(json.loads(a))

# num=int(input("enter the no :"))
# count=0
# i=1
# while i<=num:
#     if num%i==0:
#         count+=1
#     i+=1
# if count==2:
#     print("prime")
# else:
#     print("no")


# i=1
# while i<=100:
#     # print(i)
#     count=0
#     j=1
#     n=1
#     while j<=100:
#         # print(j)
#         # print(i)
#         if j%i==0:
#             count+=1
#         j+=1
#     i+=1
#     if count==2:
#         print(j,"prime")
#     else:
#         print(j,"no")
            
        

# a=[23,66,54,81]
# s=""
# for i in  range(len(a)):
#     # s+=((a[i]).split(str(a[i])))
#     # print(s)
#     for j in range(len(i)):
#         print(j)


# Python code to split list containing single integer
  
# List initialization
# input = [200]
  
# # Using map
# output = list(map(int, str(input[0])))
  
# # Printing output
# print(output)




  

# input = [200,45,67,234,12]
# sum_list=[]
# for i in range(len(input)):
#     s=str(input[i])
#     # print(s)
#     sum=0
#     for j in range(len(s)):
#         # print(s[j])
#         d=int(s[j])
#         sum+=d
#     sum_list.append(sum)
# print(sum_list)


# input = [200,45,67,234,12]
# for i in range(len(input)):
#     output = list(map(int,str(input[i])))
#     sum=0
#     for j in range(len(output)):
#         sum+=output[j]
#     sum_list.append(sum)
# print(sum_list)



# input = [200,45,67,234,12]
# sum_list=[]
# for i in range(len(input)):
#     s=str(input[i])
#     sum=0
#     for j in range(len(s)):
#         INT=int(s[j])
#         sum+=INT
#     sum_list.append(sum)
# print(sum_list)





# l = [200,45,67,234,12]
# remove=[]
# a=[]
# for i in range(len(l)):
#     s=str(l[i])
#     for j in range(len(s)):
#         inte=int(s[j])
#         if inte!=0:
#             # inte.join()
#             remove.append(inte)
#             # w=str(remove)
# print(remove)



# input = [987,89,56,34]
# for i in range(len(input)-1):
#     # print(input[i])
# # Converting to int
#     input = int(input[i])
    
#     # Output list initialization
#     output = []
    
#     while input>0:
#         rem = input % 10
#         input = int(input / 10)
#         output.append(rem)
    
#     # Printing output
#     print(output)



# a=[3,4,5,6,7,8,7]
# l=[]
# for i in range(len(a)):
#     if i%2!=0:
#         # l.append(a[i])
#     # print(l)
#         l.append(a[i])
#         a.append(l)
# print(a)





# n=4
# i=0
# s=""
# while i<n:
#     if i==n:
#         s+="1","/",i+1,"+"
#     else:
#         s+="1","/",i+1," ","+"
#     i+=1
# a=[1,2,3]
# b=[4,5,6]
# print(a+b)


