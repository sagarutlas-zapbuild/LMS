from django.urls import include, path
from rest_framework.routers import DefaultRouter


from . import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet, basename='User')

urlpatterns = [path('', include(router.urls)),
               path('auth/', views.LoginViewSet.as_view({'post': 'login'}))]
