from django.urls import include, path
from rest_framework.routers import DefaultRouter


from . import views

from rest_framework_jwt.views import ObtainJSONWebToken, RefreshJSONWebToken

obtain_jwt_token = ObtainJSONWebToken(user_model='accounts.User').as_view()

router = DefaultRouter()
router.register(r'users', views.UserViewSet, basename='User')

urlpatterns = [path('', include(router.urls)),
               path('auth/', obtain_jwt_token),]
