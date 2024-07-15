from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    
    name = models.CharField(max_length=255)
    description = models.TextField()
    category=models.CharField(max_length=255)
    image = models.ImageField(upload_to='products/')

    def __str__(self):
        return self.name

# class Wishlist(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)

#     def __str__(self):
#         return f"{self.user.username}'s wishlist"
class Wishlist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product)

    def __str__(self):
        return f"{self.user.username}'s wishlist"
