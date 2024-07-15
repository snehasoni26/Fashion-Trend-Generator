from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import response
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Product, Wishlist
from .serializers import ProductSerializer, WishlistSerializer,SignUpSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate, login, logout
# API Views
class ProductListCreateAPIView(APIView):
    def get(self, request, format=None):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductDetailAPIView(APIView):
    def get(self, request, pk, format=None):
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        product = get_object_or_404(Product, pk=pk)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class WishlistListCreateAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        wishlists = Wishlist.objects.filter(user=request.user)
        serializer = WishlistSerializer(wishlists, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        product = get_object_or_404(Product, pk=request.data.get('product_id'))
        wishlist, created = Wishlist.objects.get_or_create(user=request.user, product=product)
        serializer = WishlistSerializer(wishlist)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class WishlistDetailAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk, format=None):
        wishlist = get_object_or_404(Wishlist, pk=pk, user=request.user)
        wishlist.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
class AddToWishlistView(APIView):
    def post(self, request, product_id, *args, **kwargs):
        product = get_object_or_404(Product, id=product_id)
        user = request.user
        wishlist, created = Wishlist.objects.get_or_create(user=user)
        if product in wishlist.products.all():
            return Response({"message": "Product is already in wishlist"}, status=status.HTTP_200_OK)
        wishlist.products.add(product)
        return Response({"message": "Product added to wishlist"}, status=status.HTTP_200_OK)
# @api_view(['POST'])
# def signup(request):
#     if request.method == 'POST':
#         serializer = SignUpForm(data=request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             token, created = Token.objects.get_or_create(user=user)
#             return Response({
#                 'token': token.key,
#                 'user_id': user.pk,
#                 'email': user.email
#             }, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#singup view
class SignUpView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = SignUpSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#login view 
# 

# URL Configuration


# # Create your views here.
# from django.shortcuts import render, redirect, get_object_or_404
# from .models import Product, Wishlist
# from django.contrib.auth.decorators import login_required
# from django.contrib.auth import login, authenticate
# from django.contrib import messages
# from .forms import SignUpForm
# def home(request):
#     products = Product.objects.all()
#     return render(request, 'fashion/home.html', {'products': products})
# def signup(request):
#     if request.method == 'POST':
#         form = SignUpForm(request.POST)
#         if form.is_valid():
#             form.save()
#             username = form.cleaned_data.get('username')
#             raw_password = form.cleaned_data.get('password1')
#             user = authenticate(username=username, password=raw_password)
#             login(request, user)
#             messages.success(request, 'Account created successfully.')
#             return redirect('home')
#     else:
#         form = SignUpForm()
#     return render(request, 'fashion/signup.html', {'form': form})

# @login_required
# def add_to_wishlist(request, product_id):
#     product = get_object_or_404(Product, id=product_id)
#     Wishlist.objects.get_or_create(user=request.user, product=product)
#     messages.success(request, 'Product added to wishlist.')
#     return redirect('home')

# @login_required
# def view_wishlist(request):
#     wishlist_items = Wishlist.objects.filter(user=request.user)
#     return render(request, 'fashion/wishlist.html', {'wishlist_items': wishlist_items})