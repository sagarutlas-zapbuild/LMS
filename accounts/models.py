from django.db import models

from django.utils.translation import gettext_lazy as _

import uuid

from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin

# Create your models here.


class UserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, email, name, password, phone, is_type, referrer=None):
        if not email:
            raise ValueError("ENTER AN EMAIL BUDDY")
        if not name:
            raise ValueError("I KNOW YOU HAVE A NAME")
        if not password:
            raise ValueError("PASSWORD?!?!?!? HELLO??")
        user = self.model(
            email=self.normalize_email(email),
            referral_id=uuid.uuid1(),
            name=name,
            phone=phone,
            referrer=referrer,
            is_type = is_type)
        user.set_password(password)
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):
    user_type_choices = [('Student', 'Student'),
                         ('Teacher', 'Teacher'), ('Parent', 'Parent'), ]
    name = models.CharField(max_length=25)
    email = models.EmailField(unique=True)
    is_type = models.CharField(max_length=10, choices=user_type_choices)
    referral_id = models.CharField(max_length=50, editable=False, unique=True)
    referrer = models.OneToOneField(
        'self', on_delete=models.DO_NOTHING, related_query_name="referred", null=True, blank=True, to_field='referral_id')
    phone = models.BigIntegerField()
    password = models.CharField(max_length=255)
    is_staff = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(
        _('active'),
        default=True,
        help_text=_(
            'Designates whether this user should be treated as active. '
            'Unselect this instead of deleting accounts.'
        ),
    )

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'email'

    objects = UserManager()
