from django.shortcuts import render
from django.contrib.auth import authenticate

from rest_framework import viewsets
from rest_framework.decorators import api_view, authentication_classes, permission_classes, action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly

from .serializers import UserSerializer, LoginSerializer
from .models import User
# Create your views here.


class LoginViewSet(viewsets.GenericViewSet):
    serializer_class = UserSerializer

    def login(self, request):
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(username, password)
        user = authenticate(username=username, password=password)
        if user is not None:
            request.session['user_id'] = user.id
            print(type(user))
            return Response(self.serializer_class(user).data, status=status.HTTP_200_OK)
        else:
            return Response("Your username and password didn't match.", status=status.HTTP_401_UNAUTHORIZED)


class UserViewSet(viewsets.GenericViewSet):
    serializer_class = UserSerializer

    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        if self.action == 'create':
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticatedOrReadOnly]
        return [permission() for permission in permission_classes]

    def create(self, request):
        print(request.data)
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            try:
                referrer = User.objects.get(referral_id = request.data['referral_code'])
            except User.DoesNotExist:
                referrer = None
            user = serializer.save(referrer = referrer)
            """ send_mail(
                'Registeration Succesful',
                'You have been successfully registered as user on localhost:8000.',
                'sagarutlas.zapbuild@gmail.com',
                [user.email],
                fail_silently=False,
            ) """
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_409_CONFLICT)
