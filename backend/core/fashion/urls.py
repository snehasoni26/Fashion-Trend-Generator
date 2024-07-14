from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('add-to-wishlist/<int:product_id>/', views.add_to_wishlist, name='add_to_wishlist'),
]
