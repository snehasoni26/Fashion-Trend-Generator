from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from .models import Product, Wishlist
from django.contrib.auth.decorators import login_required

def home(request):
    products = Product.objects.all()
    return render(request, 'fashion/home.html', {'products': products})

@login_required
def add_to_wishlist(request, product_id):
    product = Product.objects.get(id=product_id)
    Wishlist.objects.create(user=request.user, product=product)
    return redirect('home')
