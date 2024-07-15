from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import response
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Product, Wishlist
from .serializers import ProductSerializer, WishlistSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes

@permission_classes([AllowAny])
class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({
            'token': token.key,
            'user_id': token.user_id,
            'email': token.user.email
        })


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

@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    print("request is", request, request.method)
    if request.method == 'POST':
        print(request)
        serializer = SignUpForm(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user_id': user.pk,
                'email': user.email
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

import requests
from django.http import JsonResponse
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

@permission_classes([AllowAny])
def get_similar_prompts(keyword):
    prompts = clothing_items = [
    "Nude balconette bra with lace detailing",
    "White figure-hugging briefs with delicate lace",
    "Red push-up bra with underwire support",
    "Lavender demi-cup bra with adjustable straps",
    "Coral padded sports bra with a racerback",
    "Black seamless camisole with padded support",
    "Grey seamless tank top with padded support",
    "Blue seamless tank top with padded support",
    "Yellow figure-hugging camisole with lace detailing",
    "Coral padded sports tank top with a drawstring",
    "Pink seamless sports bra with a hood",
    "Maroon seamless briefs with a built-in bra",
    "Lavender seamless innerwear set with delicate lace",
    "Black seamless briefs with adjustable straps",
    "Coral padded sports vest with a built-in bra",
    "White seamless camisole with a high waistband",
    "Coral seamless innerwear set with high waistband",
    "Yellow padded sports bra with adjustable straps",
    "Burgundy padded sports bra with lace detailing",
    "Beige padded sports bra with delicate lace",
    "Black full-length sports performance pants",
    "Grey seamless lounge pants with a lift",
    "Maroon capris with full coverage",
    "Yellow essential leggings with a high waistband",
    "Turquoise sports tank top with a built-in bra",
    "Maroon full-length leggings with a racerback tank top",
    "Maroon cropped leggings with a high waistband",
    "Turquoise full-length sports pants with a racerback design",
    "Pink figure-hugging shorts with a high-rise waist",
    "Coral sports tank top with a built-in bra",
    "Lavender racerback sports performance pants with lace detailing",
    "Pink seamless sports performance pants with lace detailing",
    "Pink essential trackpants with a built-in bra",
    "Lavender seamless lounge pants with padded support",
    "Coral padded sports vest with adjustable straps",
    "Greyish essential sports jacket with a drawstring",
    "Yellow essential sports vest with padded support",
    "Red racerback sports bra with a hood",
    "Turquoise seamless camisole with wired support",
    "White seamless tank top with delicate lace",
    "Greyish essential sports performance pants with lace detailing",
    "Lavender essential sports performance pants for women",
    "Red seamless innerwear set with smooth finish",
    "Sky blue trackpants with a relaxed fit",
    "Brown stretchable capri pants with a drawstring",
    "Green striped polo shirt with a slim fit",
    "Greyish relaxed fit sweatshirt with a hood",
    "Assorted pack of men’s trunks in bold colors",
    "Black biker shorts with a high waistband",
    "Black seamless sports vest with padded support",
    "A seamless bra in peach.",
    "A padded sports bra in lavender.",
    "A wired bra with floral print.",
    "A non-wired camisole in nude.",
    "A push-up bra in burgundy.",
    "A moulded underwire bra in coral.",
    "A racerback sports bra in turquoise.",
    "A strapless bra in white.",
    "A lace camisole in red.",
    "A printed T-shirt with geometric patterns.",
    "A solid vest in charcoal.",
    "A checked shirt in green and white.",
    "Striped pyjamas in grey and navy.",
    "A floral nightdress in pink.",
    "A geometric bikini in mustard and blue.",
    "An embroidered kurti in gold.",
    "A hooded jacket in maroon.",
    "A sleeveless tunic in peach.",
    "Full coverage briefs in nude.",
    "A light lift sports bra in black.",
    "A comfortable hoodie in coral.",
    "Stretch leggings in turquoise.",
    "Relaxed fit shorts in green.",
    "Slim fit jeggings in beige.",
    "Regular fit pants in burgundy.",
    "A black blazer with silver buttons.",
    "A grey sweater with geometric patterns.",
    "A white dress with lace details.",
    "A maroon cardigan with polka dots.",
    "A beige tank top with racerback style.",
    "A nude jumpsuit in crepe fabric.",
    "A peach romper in cotton.",
    "A rose skirt in silk.",
    "A red maxi dress in georgette.",
    "Coral culottes in linen.",
    "A turquoise shrug in wool.",
    "A lavender polo shirt with stripes.",
    "A burgundy tracksuit in satin.",
    "A mustard bathrobe in terrycloth.",
    "A pink scarf with floral embroidery.",
    "A green stole with geometric patterns.",
    "A yellow muffler in wool.",
    "A brown saree in silk.",
    "Charcoal track pants with mesh panels.",
    "Blue swimwear with polka dots.",
    "A purple salwar with embroidered details.",
    "Orange capris with a relaxed fit.",
    "Gold shorts in satin.",
    "A silver jacket with a hood.",
    "A T-shirt with polka dots in white and navy.",
    "A striped dress in pink and white.",
    "A checked shirt in blue and grey.",
    "A dotted skirt in black and white.",
    "An animal print tunic in brown and black."
]

    vectorizer = TfidfVectorizer()
    vectorizer.fit(prompts)

    keyword_vector = vectorizer.transform([keyword])
    cosine_similarities = cosine_similarity(keyword_vector, vectorizer.transform(prompts)).flatten()
    related_docs_indices = cosine_similarities.argsort()[:-4:-1]

    similar_prompts = [prompts[i] for i in related_docs_indices]
    return similar_prompts

@api_view(['GET'])
@permission_classes([AllowAny])
def generate_images(request):
    keyword = request.GET.get('keyword')
    similar_prompts = get_similar_prompts(keyword)
    
    response = requests.post("https://ce93-35-198-248-174.ngrok-free.app/generate", data={'prompts': similar_prompts})
    
    if response.status_code == 200:
        return JsonResponse(response.json(), safe=False)
    else:
        return JsonResponse({'error': 'Failed to generate images'}, status=500)

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