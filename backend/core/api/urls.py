from fashion.views import *
from django.urls import path
from fashion.views import *
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('products/', ProductListCreateAPIView.as_view(), name='product-list-create'),
    path('products/<int:pk>/', ProductDetailAPIView.as_view(), name='product-detail'),
    path('wishlists/', WishlistListCreateAPIView.as_view(), name='wishlist-list-create'),
    path('wishlists/<int:pk>/', WishlistDetailAPIView.as_view(), name='wishlist-detail'),
    path('signup/', signup, name='api-signup'),
    path('generate/', generate_images, name='generate'),
    path('login/', CustomAuthToken.as_view(), name='api_login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]