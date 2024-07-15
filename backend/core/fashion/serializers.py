from rest_framework import serializers
from .models import *
 
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'

class WishlistSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Wishlist
        fields = ['id', 'user', 'product']
from django.contrib.auth.password_validation import validate_password

class SignUpSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')

    def validate(self, attrs):
        if attrs['password1'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password1'])
        user.save()
        return user

