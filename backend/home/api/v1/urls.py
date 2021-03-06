from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    CustomTextViewSet,
    DescriptionViewSet,
    HomePageViewSet,
    InventoryViewSet,
    LocationViewSet,
    LokationViewSet,
    NameViewSet,
    StoresViewSet,
    StorezViewSet,
)

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    HomePageViewSet,
    CustomTextViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register("customtext", CustomTextViewSet)
router.register("homepage", HomePageViewSet)
router.register("location", LocationViewSet)
router.register("stores", StoresViewSet)
router.register("inventory", InventoryViewSet)
router.register("storez", StorezViewSet)
router.register("name", NameViewSet)
router.register("lokation", LokationViewSet)
router.register("description", DescriptionViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
