from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect, get_object_or_404
from .models import Product, Wishlist
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate
from django.contrib import messages
from .forms import SignUpForm
def home(request):
    products = Product.objects.all()
    return render(request, 'fashion/home.html', {'products': products})
def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            messages.success(request, 'Account created successfully.')
            return redirect('home')
    else:
        form = SignUpForm()
    return render(request, 'fashion/signup.html', {'form': form})

@login_required
def add_to_wishlist(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    Wishlist.objects.get_or_create(user=request.user, product=product)
    messages.success(request, 'Product added to wishlist.')
    return redirect('home')

@login_required
def view_wishlist(request):
    wishlist_items = Wishlist.objects.filter(user=request.user)
    return render(request, 'fashion/wishlist.html', {'wishlist_items': wishlist_items})